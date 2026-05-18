// js/proslider.js
import React from "react";
import htm from "htm";
import { pros } from "./prosData.js"; // 프로 데이터에서 사진을 자동으로 가져옴

const html = htm.bind(React.createElement);

export const ProFaceSlider = () => {
    // prosData.js에 등록된 프로들의 사진만 추출
    const prosImg = pros.map(p => p.img);

    // 컴포넌트 재사용을 위해 기차 한 칸을 함수로 분리
    const renderTrack = () => html`
        <div class="flex animate-infinite-scroll space-x-8 pr-8">
            ${prosImg.map((imgSrc, i) => html`
                <div class="flex-none w-24" key=${i}>
                    <div class="relative aspect-square rounded-full overflow-hidden border-2 border-slate-100 shadow-sm transition-transform hover:scale-110">
                        <img src="${imgSrc}" class="w-full h-full object-cover" loading="lazy" />
                    </div>
                </div>
            `)}
        </div>
    `;

    return html`
        <section class="py-6 bg-white overflow-hidden relative w-full">
            <div class="flex w-max">
                ${renderTrack()}
                ${renderTrack()}
            </div>

            <style>
                @keyframes infinite-scroll {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); } /* 전체 너비의 반(즉 기차 1개분)이 지나가면 리셋 */
                }
                .w-max {
                    width: max-content;
                }
                .animate-infinite-scroll {
                    display: flex;
                    animation: infinite-scroll 40s linear infinite;
                    will-change: transform;
                }
                /* 마우스 올렸을 때 2개 기차가 동시에 멈추도록 부모 영역에 hover 처리 권장 */
                .w-max:hover .animate-infinite-scroll {
                    animation-play-state: paused;
                }
            </style>
        </section>
    `;
};
