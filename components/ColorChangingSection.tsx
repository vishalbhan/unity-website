import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styled from "styled-components";
import { withChildren } from "@builder.io/react";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  beforeColor: string;
  bgColor: string;
  text: string;
  children: any;
}

const ColorChangingSectionComponent = ({ beforeColor, bgColor, text, children }: Props) => {
  const bgRef = React.useRef(null);

  useEffect(() => {
    gsap.to(bgRef.current, {
      scrollTrigger: {
        trigger: bgRef.current,
        start: "top 40%",
        end: "bottom 50%",
        scrub: true,
        onEnter: () => {
          gsap.to(bgRef.current, { width: '100vw', height: '150vh', ease: "power1.inOut", duration: 0.5 })
          setTimeout(() => {
            document.body.style.backgroundColor = bgColor;
          }, 300)
        },
        onLeaveBack: () => {
          gsap.to(bgRef.current, { width: '100%', height: '100%', ease: "power1.inOut", duration: 0.5 })
          setTimeout(() => {
            document.body.style.backgroundColor = beforeColor;
          }, 300)
        }
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
    }
  }, [bgRef.current]);

  return (
    <div className="my-20">
      <div className="relative">
        <Background 
          style={{backgroundColor: bgColor}}
          ref={bgRef}
        />
        {
          text &&
          <div className="h-96 grid place-items-center">
            <Text
              className="absolute inset-0 w-80"
              dangerouslySetInnerHTML={{ __html: text }}
            />
          </div>
        }
        {children}
      </div>
    </div>
  );
}

const ColorChangingSection = withChildren(ColorChangingSectionComponent);
export default ColorChangingSection

const Background = styled.div`
  z-index: -1;
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  width: 100%;
  border-radius: 32px;
  height: 100%;
`

const Text = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  width: 1000px;
`
