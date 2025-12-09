import Card from '../../components/Card'
import styles from './Technologies.module.css'
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaJava, FaBootstrap, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript, BiLogoSpringBoot } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";

function Technologies() {
    return (
        <div className={styles.container} id='technologies'>

            <div className={styles.title}>
                <h2>Tecnologias</h2>
            </div>

            <div className={styles.cards}>
                <Card icon={<FaHtml5 />} name={'HTML'} />
                <Card icon={<FaCss3Alt />} name={'CSS'} />
                <Card icon={<IoLogoJavascript />} name={'Javascript'} />
                <Card icon={<BiLogoTypescript />} name={'Typescript'} />
                <Card icon={<FaReact />} name={'React.js'} />
                <Card icon={<FaNodeJs />} name={'Node.js'} />
                <Card icon={<FaJava />} name={'Java'} />
                <Card icon={<BiLogoSpringBoot />} name={'Spring Boot'} />
                <Card icon={<RiTailwindCssFill />} name={'Tailwind CSS'} />
                <Card icon={<FaGitAlt />} name={'Git'} />
            </div>

        </div>
    )
}

export default Technologies
