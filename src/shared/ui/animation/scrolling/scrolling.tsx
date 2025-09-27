"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/shared/lib/cn";
import "./scrolling.css";

const Scrolling = ({ children }: { children: React.ReactNode }) => {
  const conRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const initialNodesCountRef = useRef<number>(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const [isInit, setIsInit] = useState(false);

  useEffect(() => {
    if (isInit) return;
    if (conRef.current) {
      // 초기 노드 개수 저장
      if (initialNodesCountRef.current === 0) {
        initialNodesCountRef.current = conRef.current.childNodes.length;
      }

      const setupObserver = () => {
        if (!conRef.current) return;

        const length = conRef.current.childNodes.length;
        const lastIndex = length - 1;
        if (lastIndex < 0) return;
        const lastNode = conRef.current.childNodes[lastIndex] as HTMLDivElement;

        let option = {
          root: rootRef.current,
          rootMargin: "0px",
          threshold: 1.0,
        };

        const callback = (entries: IntersectionObserverEntry[]) => {
          entries.forEach((entry) => {
            // 마지막 노드가 컨테이너에 보일 때,
            // 컨테이너의 노드들을 복제하여 컨테이너에 추가
            if (entry.isIntersecting && conRef.current) {
              // 기존 observer 해제
              if (observerRef.current) {
                observerRef.current.disconnect();
              }

              // 초기 노드들만 복제
              const nodes = Array.from(conRef.current.childNodes).slice(
                0,
                initialNodesCountRef.current
              );
              nodes.forEach((node) => {
                const clonedNode = node.cloneNode(true);
                conRef.current?.appendChild(clonedNode);
              });

              // 새로운 마지막 노드로 observer 재설정
              setTimeout(() => {
                setupObserver();
              }, 100);
            } else {
              setIsInit(true);

              const nodes = Array.from(conRef?.current?.childNodes || []);
              nodes.forEach((node) => {
                const clonedNode = node.cloneNode(true);
                conRef.current?.appendChild(clonedNode);
              });
            }
          });
        };

        observerRef.current = new IntersectionObserver(callback, option);
        observerRef.current.observe(lastNode);
      };

      setupObserver();

      return () => {
        if (observerRef.current) {
          observerRef.current.disconnect();
        }
      };
    }
  }, [children, isInit]);

  return (
    <div ref={rootRef} className={cn("w-full", "flex", "overflow-hidden", "")}>
      <div
        ref={conRef}
        className={cn(
          "flex flex-row gap-3 flex-nowrap",
          isInit && "animate-scrolling"
        )}
      >
        {children}
      </div>
    </div>
  );
};

Scrolling.Item = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={cn("flex-shrink-0 whitespace-nowrap")}>{children}</div>
  );
};

export default Scrolling;
