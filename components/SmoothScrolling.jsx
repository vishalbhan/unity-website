import { ReactLenis } from "@studio-freight/react-lenis";

export default function SmoothScrolling({ children }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1, smoothTouch: true }}>
    {/* <ReactLenis root> */}
      {children}
    </ReactLenis>
  );
}