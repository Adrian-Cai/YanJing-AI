import Image, { type StaticImageData } from "next/image";

import backgroundBase from "../../../docs/assets/background-base.png";

type RightHeroVisualProps = {
  className?: string;
  priority?: boolean;
};

type HeroLayer = {
  src: StaticImageData | string;
  className: string;
  priority?: boolean;
  unoptimized?: boolean;
};

const heroLayerImages = {
  orbit: "/images/orbit-lines.svg",
  dots: "/images/right-hero/light-dots.png",
  frame: "/images/device-frame.png",
  ui: "/images/right-hero/device-ui.png",
  robot: "/images/robot.png",
} as const;

const imageSizes =
  "(min-width: 1280px) 52vw, (min-width: 768px) 70vw, 100vw";

function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function HeroLayerImage({ src, className, priority, unoptimized }: HeroLayer) {
  return (
    <Image
      src={src}
      alt=""
      fill
      sizes={imageSizes}
      priority={priority}
      unoptimized={unoptimized}
      draggable={false}
      className={cn(
        "pointer-events-none absolute inset-0 select-none object-contain",
        className,
      )}
    />
  );
}

export function RightHeroVisual({
  className,
  priority = true,
}: RightHeroVisualProps) {
  return (
    <div
      role="img"
      aria-label="言镜 AI 面试助手主视觉，包含未来感轨道、玻璃显示器、屏幕界面与机器人助手"
      className={cn(
        "relative isolate aspect-[1448/1086] w-full overflow-visible",
        className,
      )}
    >
      <HeroLayerImage
        src={backgroundBase}
        priority={priority}
        className="z-0"
      />
      <HeroLayerImage
        src={heroLayerImages.orbit}
        unoptimized
        className="right-hero-orbit z-10 opacity-[0.85]"
      />
      <HeroLayerImage
        src={heroLayerImages.dots}
        priority={priority}
        className="right-hero-dots z-20 opacity-90"
      />

      <div className="right-hero-device pointer-events-none absolute inset-0 z-30 select-none">
        <HeroLayerImage
          src={heroLayerImages.frame}
          priority={priority}
          className="z-10 drop-shadow-[0_34px_46px_rgba(63,105,218,0.18)]"
        />
        <HeroLayerImage
          src={heroLayerImages.ui}
          priority={priority}
          className="z-20"
        />
        <HeroLayerImage
          src={heroLayerImages.robot}
          priority={priority}
          className="right-hero-robot z-30 drop-shadow-[0_22px_28px_rgba(44,104,220,0.18)]"
        />
      </div>

      <style>{`
        @keyframes rightHeroOrbitDrift {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
          50% { transform: translate3d(0.45%, -0.35%, 0) rotate(0.65deg); }
        }

        @keyframes rightHeroDotsGlow {
          0%, 100% { opacity: 0.86; }
          50% { opacity: 1; }
        }

        @keyframes rightHeroDeviceFloat {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -0.75%, 0); }
        }

        @keyframes rightHeroRobotFloat {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0.18%, -0.28%, 0); }
        }

        .right-hero-orbit {
          animation: rightHeroOrbitDrift 14s ease-in-out infinite;
          transform-origin: 54% 48%;
        }

        .right-hero-dots {
          animation: rightHeroDotsGlow 7s ease-in-out infinite;
        }

        .right-hero-device {
          animation: rightHeroDeviceFloat 8s ease-in-out infinite;
        }

        .right-hero-robot {
          animation: rightHeroRobotFloat 6.5s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .right-hero-orbit,
          .right-hero-dots,
          .right-hero-device,
          .right-hero-robot {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
