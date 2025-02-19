import Image from "next/image";
import styles from "./page.module.css";
import Logo from "@/app/components/shared/Logo";
import React from "react";
import Link from "next/link";
import {auth} from "@/auth";

const Home: React.FC = async () =>
{
    const session = await auth();

    return (
        <div className={styles.intro}>
            <div className={styles.navbar}>
                <Logo/>
            </div>
            <div className={styles.container}>
                <div className={styles.left}>
                    <h1>Bienvenido a NovaQuote, la plataforma ideal para tus cotizaciones.</h1>
                    {session && session?.user ? (
                        <Link href={"/dashboard"}>
                            <span>Crea tus proyectos!</span>
                        </Link>
                    ) : (
                        <Link href={"/signin"}>
                            <span>Inicia Sesion</span>
                        </Link>
                    )}
                </div>
                <div className={styles.right}>
                    <Image
                        src={"/bglogin.png"}
                        width={500}
                        height={50}
                        style={{objectFit: "cover"}}
                        alt={"bg"}
                        priority
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;