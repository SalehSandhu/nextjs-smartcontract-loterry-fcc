import Head from "next/head"
import styles from "../styles/Home.module.css"
import Header from "../../components/Header"
import LotteryEntrace from "../../components/LotteryEntrace"

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Smart contract lottery</title>
                <meta name="description" content="Our Smart contract Lottery" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header></Header>
            <LotteryEntrace></LotteryEntrace>
        </div>
    )
}
