import CardProject from '../../components/CardProject'
import styles from './Projects.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

function Projects() {
    return (
        <div className={styles.container} id='projects'>

            <div className={styles.title}>
                <h2>Projetos</h2>
            </div>
            
            <div className={styles.swiper_container}>
                <Swiper
                    className={styles.swiper}
                    modules={[Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true
                    }}
                    breakpoints={{
                        768: {
                            slidesPerView: 2
                        },
                        1050: {
                            slidesPerView: 3
                        }
                    }}
                >

                    <SwiperSlide className={styles.swiper_slide}>
                        <div className={styles.card_project}>
                            <CardProject img={'/assets/projeto-pokemon.png'} 
                                text={'O projeto Pokemons Page é uma aplicação web interativa que permite aos usuários explorar uma vasta coleção de Pokémon. Utilizando a PokéAPI como fonte de dados, a aplicação oferece funcionalidades como busca por nome, visualização de detalhes individuais de cada Pokémon, incluindo tipos, habilidades e status.'}
                                urlDeploy={'https://pokemons-page.vercel.app/'} 
                                urlRepository={'https://github.com/Rodrigues4567/pokemons-page'} 
                            />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className={styles.swiper_slide}>
                        <div className={styles.card_project}>
                            <CardProject img={'/assets/autmobile.jpg'} 
                                text={'O projeto Autmobile é um site institucional desenvolvido para uma oficina automotiva fictícia, com o objetivo de apresentar seus serviços, produtos e informações de contato de forma clara e atrativa com foco em design responsivo para garantir uma boa experiência em diferentes dispositivos.'}
                                urlDeploy={'https://rodrigues4567.github.io/Autmobile/'}
                                urlRepository={'https://github.com/Rodrigues4567/Autmobile'}
                            />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className={styles.swiper_slide}>
                        <div className={styles.card_project}>
                            <CardProject img={'/assets/e-commerce.png'}
                                text={'O projeto Teste E-commerce Avanti é uma loja virtual fictícia desenvolvida para simular a experiência de um e-commerce moderno. O site é responsivo e foca na navegação fluida e na apresentação visual atrativa.'}
                                urlDeploy={'https://rodrigues4567.github.io/teste-e-commerce-avanti/'}
                                urlRepository={'https://github.com/Rodrigues4567/teste-e-commerce-avanti'} 
                            />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className={styles.swiper_slide}>
                        <div className={styles.card_project}>
                            <CardProject img={'/assets/Whitepace.jpg'}
                                text={'O projeto Whitepace é um site institucional fictício que promove serviços de criação de websites, lojas virtuais e blogs para empresas de diversos portes. Com um design moderno e responsivo, a página destaca os benefícios de ter uma presença online profissional, enfatizando a facilidade de implementação e a segurança oferecida.'}
                                urlDeploy={'https://rodrigues4567.github.io/projeto-whitepace/'}
                                urlRepository={'https://github.com/Rodrigues4567/projeto-whitepace'} 
                            />    
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>

        </div>
    )
}

export default Projects
