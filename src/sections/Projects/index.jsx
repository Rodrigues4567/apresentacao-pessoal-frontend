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
                                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sit aliquid magni animi reiciendis odio impedit laboriosam est eligendi officia quos in molestias fugiat ipsa, error aspernatur ea numquam voluptas?'}
                                urlDeploy={'https://pokemons-page.vercel.app/'} 
                                urlRepository={'https://github.com/Rodrigues4567/pokemons-page'} 
                            />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className={styles.swiper_slide}>
                        <div className={styles.card_project}>
                            <CardProject img={'/assets/autmobile.jpg'} 
                                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sit aliquid magni animi reiciendis odio impedit laboriosam est eligendi officia quos in molestias fugiat ipsa, error aspernatur ea numquam voluptas?'}
                                urlDeploy={'https://rodrigues4567.github.io/Autmobile/'}
                                urlRepository={'https://github.com/Rodrigues4567/Autmobile'}
                            />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className={styles.swiper_slide}>
                        <div className={styles.card_project}>
                            <CardProject img={'/assets/e-commerce.png'}
                                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sit aliquid magni animi reiciendis odio impedit laboriosam est eligendi officia quos in molestias fugiat ipsa, error aspernatur ea numquam voluptas?'}
                                urlDeploy={'https://rodrigues4567.github.io/teste-e-commerce-avanti/'}
                                urlRepository={'https://github.com/Rodrigues4567/teste-e-commerce-avanti'} 
                            />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className={styles.swiper_slide}>
                        <div className={styles.card_project}>
                            <CardProject img={'/assets/Whitepace.jpg'}
                                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sit aliquid magni animi reiciendis odio impedit laboriosam est eligendi officia quos in molestias fugiat ipsa, error aspernatur ea numquam voluptas?'}
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
