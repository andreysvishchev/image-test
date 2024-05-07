import Image from "next/image"
import styles from "./page.module.css"
import img2x_1 from "@/assets/2x.jpeg"
import img2x_2 from "@/assets/2x-2.jpeg"
import img1_5x_1 from "@/assets/1.5x.jpeg"
import img1_5x_2 from "@/assets/1.5x-2.jpeg"
import img1x_1 from "@/assets/1x.jpeg"
import img1x_2 from "@/assets/1x-2.jpeg"

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.block}>
                <div className={styles.title}>2x back</div>
                <div className={styles.image}>
                <Image
                        fill
                        src={'https://api.nvg8.ru/upload/tmp/test/2x.jpeg'}
                        alt=""
                    />
                </div>
                <div className={styles.title}>2x local</div>
                <div className={styles.image}>
                <Image
                        fill
                        src={img2x_1}
                        alt=""
                    />
                </div>
            </div>

            <div className={styles.block}>
                <div className={styles.title}>1.5x back</div>
                <div className={styles.image}>
                <Image
                        fill
                        src={'https://api.nvg8.ru/upload/tmp/test/1.5x.jpeg'}
                        alt=""
                    />
                </div>
                <div className={styles.title}>1.5x local</div>
                <div className={styles.image}>
                    <Image
                        fill
                        src={img1_5x_1}
                        alt=""
                    />
                </div>
            </div>

            <div className={styles.block}>
                <div className={styles.title}>1x back</div>
                <div className={styles.image}>
                <Image
                        fill
                        src={'https://api.nvg8.ru/upload/tmp/test/1x.jpeg'}
                        alt=""
                    />
                </div>
                <div className={styles.title}>1x local</div>
                <div className={styles.image}>
                <Image
                        fill
                        src={img1x_1}
                        alt=""
                    />
                </div>
            </div>

            <div className={styles.block}>
                <div className={styles.title}>2x back</div>
                <div className={styles.image}>
                <Image
                        fill
                        src={'https://api.nvg8.ru/upload/tmp/test/2x-2.jpeg'}
                        alt=""
                    />
                </div>
                <div className={styles.title}>2x local</div>
                <div className={styles.image}>
                <Image
                        fill
                        src={img2x_2}
                        alt=""
                    />
                </div>
            </div>

            <div className={styles.block}>
                <div className={styles.title}>1.5x back</div>
                <div className={styles.image}>
                <Image
                        fill
                        src={'https://api.nvg8.ru/upload/tmp/test/1.5x-2.jpeg'}
                        alt=""
                    />
                </div>
                <div className={styles.title}>1.5x local</div>
                <div className={styles.image}>
                    <Image
                        fill
                        src={img1_5x_2}
                        alt=""
                    />
                </div>
            </div>

            <div className={styles.block}>
                <div className={styles.title}>1x back</div>
                <div className={styles.image}>
                <Image
                        fill
                        src={'https://api.nvg8.ru/upload/tmp/test/1x-2.jpeg'}
                        alt=""
                    />
                </div>
                <div className={styles.title}>1x local</div>
                <div className={styles.image}>
                <Image
                        fill
                        src={img1x_2}
                        alt=""
                    />
                </div>
            </div>
        </main>
    )
}
