import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import './Carousel.css';

const Carousel = ({ children }) => {
    // Inicializa o Embla. 'loop: true' faz o carrossel ser infinito.
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

    // Funções para navegar entre os slides
    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    // Atualiza o estado dos botões caso não estejamos usando loop
    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setPrevBtnEnabled(emblaApi.canScrollPrev());
        setNextBtnEnabled(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);
    }, [emblaApi, onSelect]);

    return (
        <div className="carousel-wrapper">
            {/* O viewport é a "janela" que esconde o que está fora */}
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {/* Aqui mapeamos qualquer coisa que você passar para dentro do carrossel */}
                    {React.Children.map(children, (child, index) => (
                        <div className="embla__slide" key={index}>
                            {child}
                        </div>
                    ))}
                </div>
            </div>

            {/* Botões de Navegação (opcionais, você pode estilizá-los como quiser) */}
            <div className="carousel-controls">
                <button 
                    className="carousel-button" 
                    onClick={scrollPrev} 
                    disabled={!prevBtnEnabled}
                >
                    &lt;
                </button>
                <button 
                    className="carousel-button" 
                    onClick={scrollNext} 
                    disabled={!nextBtnEnabled}
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default Carousel;