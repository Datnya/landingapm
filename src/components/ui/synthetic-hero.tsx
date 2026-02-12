"use client";

import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import { useMemo, useRef, useEffect } from "react";
import * as THREE from "three";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// SplitText usually requires a Club GSAP membership. 
// If it fails to import, the component will still render but without split animations.
import { SplitText } from "gsap/SplitText";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

gsap.registerPlugin(useGSAP);
try {
    gsap.registerPlugin(SplitText);
} catch (e) {
    console.warn("GSAP SplitText not available, falling back to simple animation.");
}

interface ShaderPlaneProps {
    vertexShader: string;
    fragmentShader: string;
    uniforms: { [key: string]: { value: any } };
}

const ShaderPlane = ({
    vertexShader,
    fragmentShader,
    uniforms,
}: ShaderPlaneProps) => {
    const meshRef = useRef<THREE.Mesh>(null);
    const { size } = useThree();

    // Preserve the dynamic background image (Earth with Emerald Pulse)
    const texture = useLoader(THREE.TextureLoader, "/Imágenes/Hero final.jpg");

    useEffect(() => {
        if (texture) {
            texture.generateMipmaps = false;
            texture.minFilter = THREE.LinearFilter;
            texture.magFilter = THREE.LinearFilter;
            if (uniforms.u_texture) {
                uniforms.u_texture.value = texture;
                uniforms.u_texture_res.value.set(texture.image.width, texture.image.height);
            }
        }
    }, [texture, uniforms]);

    useFrame((state) => {
        if (meshRef.current) {
            const material = meshRef.current.material as THREE.ShaderMaterial;
            material.uniforms.u_time.value = state.clock.elapsedTime * 0.5;
            material.uniforms.u_resolution.value.set(size.width, size.height, 1.0);

            const scroll = window.scrollY;
            const scrollFactor = Math.min(scroll / (window.innerHeight * 1.5), 1.0);
            material.uniforms.u_scroll.value = scrollFactor;
        }
    });

    return (
        <mesh ref={meshRef}>
            <planeGeometry args={[2, 2]} />
            <shaderMaterial
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={uniforms}
                side={THREE.FrontSide}
                depthTest={false}
                depthWrite={false}
            />
        </mesh>
    );
};

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = `
  precision highp float;

  varying vec2 vUv;
  uniform float u_time;
  uniform float u_scroll;
  uniform vec3 u_resolution;
  uniform vec2 u_texture_res;
  uniform sampler2D u_texture;

  void main() {
      float s_aspect = u_resolution.x / u_resolution.y;
      float t_aspect = u_texture_res.x / u_texture_res.y;
      
      vec2 uv = vUv;
      if (s_aspect > t_aspect) {
          float scale = s_aspect / t_aspect;
          uv.y = (uv.y - 0.5) / scale + 0.5;
      } else {
          float scale = t_aspect / s_aspect;
          uv.x = (uv.x - 0.5) / scale + 0.5;
      }

      float baseZoom = 1.35; 
      vec2 focusedUv = (uv - vec2(0.5, 0.15)) / baseZoom + vec2(0.5, 0.15);
      
      float scrollZoom = 1.0 + u_scroll * 0.3;
      vec2 finalUv = (focusedUv - vec2(0.5, 0.15)) / scrollZoom + vec2(0.5, 0.15);
      
      finalUv.y += u_scroll * 0.08;
      vec4 texColor = texture2D(u_texture, clamp(finalUv, 0.0, 1.0));

      vec2 p = 6.0 * ((vUv * u_resolution.xy - 0.5 * u_resolution.xy) / u_resolution.y);
      float c = 0.0;
      vec2 i = p;
      float rot = length(p) + u_time * 0.5;
      
      for (float n = 0.0; n < 3.0; n++) {
          float rr = length(p) + 0.1 * sin(u_time * 0.4 + n + length(p));
          p *= mat2(cos(rot), sin(rot), -sin(rot), cos(rot)) * -0.3;
          float t = length(p) - u_time / (n + 25.0);
          i -= p + sin(t - i.y) + rr;
          c += 1.2 / length(vec2(sin(i.x + t) / 0.15, cos(i.y + t) / 0.15));
      }
      c /= 12.0;

      vec3 pulseColor = vec3(0.1, 0.6, 0.4) * smoothstep(0.2, 0.8, c);
      // Blend texture with the shader effect (Add brightness and subtle pulse)
      vec3 finalColor = mix(texColor.rgb, texColor.rgb + pulseColor * 0.4, 0.5);
      
      // Apply 60% black overlay (40% brightness) for improved readability
      finalColor *= 0.40;

      gl_FragColor = vec4(finalColor, 1.0);
  }
`;

interface HeroProps {
    title: string;
    description: string;
    badgeText?: string;
    badgeLabel?: string;
    ctaButtons?: Array<{ text: string; href?: string; primary?: boolean }>;
    microDetails?: Array<string>;
}

const SyntheticHero = ({
    title = "Potenciamos organizaciones con normas internacionales, sostenibilidad e innovación",
    description = "Transformamos organizaciones a través de la formación técnica especializada y la consultoría estratégica de alto impacto.",
    badgeText = "Líderes en Consultoría",
    badgeLabel = "APM GROUP",
    ctaButtons = [
        { text: "Explorar Soluciones", href: "#servicios", primary: true },
        { text: "Ver Portafolio", href: "#servicios" },
    ],
    microDetails = [
        "Inmersión en estándares ISO",
        "Estrategia basada en datos",
        "Formación de alto impacto",
    ],
}: HeroProps) => {
    const sectionRef = useRef<HTMLElement | null>(null);
    const badgeWrapperRef = useRef<HTMLDivElement | null>(null);
    const headingRef = useRef<HTMLHeadingElement | null>(null);
    const paragraphRef = useRef<HTMLParagraphElement | null>(null);
    const ctaRef = useRef<HTMLDivElement | null>(null);
    const microRef = useRef<HTMLUListElement | null>(null);

    const shaderUniforms = useMemo(
        () => ({
            u_time: { value: 0 },
            u_scroll: { value: 0 },
            u_resolution: { value: new THREE.Vector3(1, 1, 1) },
            u_texture_res: { value: new THREE.Vector2(1920, 1080) },
            u_texture: { value: null }
        }),
        [],
    );

    useGSAP(
        () => {
            if (!headingRef.current) return;

            // Wait for fonts to be ready for SplitText accuracy
            document.fonts.ready.then(() => {
                let split: any = null;
                try {
                    split = new SplitText(headingRef.current!, {
                        type: "lines",
                        wordsClass: "hero-lines",
                    });

                    gsap.set(split.lines, {
                        filter: "blur(16px)",
                        yPercent: 24,
                        autoAlpha: 0,
                        scale: 1.04,
                        transformOrigin: "50% 100%",
                    });
                } catch (e) {
                    // Fallback if SplitText is missing
                    gsap.set(headingRef.current, { autoAlpha: 0, y: 30, filter: "blur(10px)" });
                }

                if (badgeWrapperRef.current) {
                    gsap.set(badgeWrapperRef.current, { autoAlpha: 0, y: -8 });
                }
                if (paragraphRef.current) {
                    gsap.set(paragraphRef.current, { autoAlpha: 0, y: 8 });
                }
                if (ctaRef.current) {
                    gsap.set(ctaRef.current, { autoAlpha: 0, y: 8 });
                }

                const microItems = microRef.current
                    ? Array.from(microRef.current.querySelectorAll("li"))
                    : [];
                if (microItems.length > 0) {
                    gsap.set(microItems, { autoAlpha: 0, y: 6 });
                }

                const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

                /* Skip Badge animation logic */

                if (split && split.lines) {
                    tl.to(
                        split.lines,
                        {
                            filter: "blur(0px)",
                            yPercent: 0,
                            autoAlpha: 1,
                            scale: 1,
                            duration: 0.9,
                            stagger: 0.12,
                        },
                        0.1,
                    );
                } else {
                    tl.to(headingRef.current, { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 1 }, 0.1);
                }

                if (paragraphRef.current) {
                    tl.to(
                        paragraphRef.current,
                        { autoAlpha: 1, y: 0, duration: 0.5 },
                        "-=0.55",
                    );
                }

                if (ctaRef.current) {
                    tl.to(
                        ctaRef.current,
                        { autoAlpha: 1, y: 0, duration: 0.5 },
                        "-=0.35",
                    );
                }

                if (microItems.length > 0) {
                    tl.to(
                        microItems,
                        { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.1 },
                        "-=0.25",
                    );
                }
            });
        },
        { scope: sectionRef },
    );

    return (
        <section
            ref={sectionRef}
            className="relative flex items-center justify-center min-h-screen overflow-hidden bg-black"
        >
            <div className="absolute inset-0 z-0">
                <Canvas dpr={[1, 2]}>
                    <ShaderPlane
                        vertexShader={vertexShader}
                        fragmentShader={fragmentShader}
                        uniforms={shaderUniforms}
                    />
                </Canvas>
            </div>

            <div className="relative z-10 flex flex-col items-start text-left px-4 md:px-8 lg:px-12 max-w-7xl w-full">

                <h1
                    ref={headingRef}
                    className="text-3xl md:text-4xl lg:text-5xl max-w-3xl font-light tracking-tight text-white mb-6 leading-[1.1]"
                >
                    {title}
                </h1>

                <p
                    ref={paragraphRef}
                    className="text-emerald-50/80 text-base md:text-lg max-w-2xl mb-12 font-light leading-relaxed"
                >
                    {description}
                </p>

                <div
                    ref={ctaRef}
                    className="flex flex-wrap items-center justify-start gap-6"
                >
                    {ctaButtons.map((button, index) => {
                        const isPrimary = button.primary ?? index === 0;
                        const classes = isPrimary
                            ? "px-10 py-4 rounded-xl text-base font-medium backdrop-blur-lg bg-primary hover:bg-primary/90 text-secondary shadow-xl transition-all cursor-pointer border-none uppercase tracking-widest"
                            : "px-10 py-4 rounded-xl text-base font-medium border-2 border-white/20 text-white hover:bg-white/10 backdrop-blur-lg transition-all cursor-pointer uppercase tracking-widest";

                        return (
                            <Button
                                key={index}
                                variant={isPrimary ? "default" : "outline"}
                                className={classes}
                                asChild={!!button.href}
                            >
                                {button.href ? (
                                    <a href={button.href}>{button.text}</a>
                                ) : (
                                    button.text
                                )}
                            </Button>
                        );
                    })}
                </div>

                {microDetails.length > 0 && (
                    <ul
                        ref={microRef}
                        className="mt-12 flex flex-wrap justify-start gap-8 text-xs font-light tracking-tight text-white/90"
                    >
                        {microDetails.map((detail, index) => (
                            <li key={index} className="flex items-center gap-3">
                                <span className="h-1 w-1 rounded-full bg-emerald-200/60" />
                                {detail}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </section>
    );
};

export default SyntheticHero;
