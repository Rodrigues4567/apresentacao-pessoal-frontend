import CardProject from '../../components/CardProject'
import styles from './Projects.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

function Projects() {
    return (
        <div className={styles.container}>

            <div className={styles.title}>
                <h2>Projetos</h2>
            </div>
            
            <div className={styles.swiper_container}>
                <Swiper
                    className={styles.swiper}
                    modules={[Pagination]}
                    spaceBetween={26}
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
                        1024: {
                            slidesPerView: 3
                        }
                    }}
                >

                    <SwiperSlide className={styles.swiper_slide}>
                        <CardProject img={'/assets/projeto-pokemon.png'} 
                            text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sit aliquid magni animi reiciendis odio impedit laboriosam est eligendi officia quos in molestias fugiat ipsa, error aspernatur ea numquam voluptas?'}
                            urlDeploy={'https://pokemons-page.vercel.app/'} 
                            urlRepository={'https://github.com/Rodrigues4567/pokemons-page'} 
                        />
                    </SwiperSlide>

                    <SwiperSlide className={styles.swiper_slide}>
                        <CardProject img={'/assets/autmobile.jpg'} 
                            text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sit aliquid magni animi reiciendis odio impedit laboriosam est eligendi officia quos in molestias fugiat ipsa, error aspernatur ea numquam voluptas?'}
                            urlDeploy={'https://rodrigues4567.github.io/Autmobile/'}
                            urlRepository={'https://github.com/Rodrigues4567/Autmobile'}
                        />
                    </SwiperSlide>

                    <SwiperSlide className={styles.swiper_slide}>
                        <CardProject img={'/assets/e-commerce.png'}
                            text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sit aliquid magni animi reiciendis odio impedit laboriosam est eligendi officia quos in molestias fugiat ipsa, error aspernatur ea numquam voluptas?'}
                            urlDeploy={'https://rodrigues4567.github.io/teste-e-commerce-avanti/'}
                            urlRepository={'https://github.com/Rodrigues4567/teste-e-commerce-avanti'} 
                        />
                    </SwiperSlide>

                    <SwiperSlide className={styles.swiper_slide}>
                        <CardProject img={'/assets/Whitepace.jpg'}
                            text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sit aliquid magni animi reiciendis odio impedit laboriosam est eligendi officia quos in molestias fugiat ipsa, error aspernatur ea numquam voluptas?'}
                            urlDeploy={'https://rodrigues4567.github.io/projeto-whitepace/'}
                            urlRepository={'https://github.com/Rodrigues4567/projeto-whitepace'} 
                        />    
                    </SwiperSlide>

                </Swiper>
            </div>

        </div>
    )
}

export default Projects
