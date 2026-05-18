// js/proslider.js
import React from "react";
import htm from "htm";
import { pros } from "./prosData.js"; // 프로 데이터에서 사진을 자동으로 가져옴

const html = htm.bind(React.createElement);

export const ProFaceSlider = () => {
    // prosData.js에 등록된 프로들의 사진만 쏙 쏙 뽑아서 배열로 만듭니다.
    const prosImg = pros.map(p => p.img);
    
    // 무한 롤링을 위해 2회차로 복사
    const rollingPros = [...prosImg, ...prosImg];

    return html`
        <section class="py-6 bg-white overflow-hidden relative">
            <div class="flex items-center">
                <div class="flex animate-infinite-scroll space-x-8">
                    ${rollingPros.map((imgSrc, i) => html`
                        <div class="flex-none w-24" key=${i}>
                            <div class="relative aspect-square rounded-full overflow-hidden border-2 border-slate-100 shadow-sm transition-transform hover:scale-110">
                                <img src="${imgSrc}" class="w-full h-full object-cover" loading="lazy" />
                            </div>
                        </div>
                    `)}
                </div>
            </div>

            <style>
                @keyframes infinite-scroll {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
                .animate-infinite-scroll {
                    display: flex;
                    width: max-content;
                    animation: infinite-scroll 40s linear infinite;
                    will-change: transform;
                }
                .animate-infinite-scroll:hover {
                    animation-play-state: paused;
                }
            </style>
        </section>
    `;
};
