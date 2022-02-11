import { useState, useRef, useEffect } from "react";
// @ts-expect-error
import CLOUDS from "vanta/dist/vanta.clouds.min.js";
import * as THREE from "three";

export default function Background({ children }: any): JSX.Element {
    const [vantaEffect, setVantaEffect] = useState(0);

    const vantaRef = useRef(null);

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                CLOUDS({
                  THREE,
                  el: vantaRef.current,
                  mouseControls: true,
                  touchControls: true,
                  gyroControls: true,
                })
            );
        }
        return () => {
          // @ts-expect-error
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    return (
        <div className="h-screen" ref={vantaRef}>{children}</div>
    )
}