import Head from "next/head";
import styles from "../../styles/Home.module.scss";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {



  return (
    <>
      <Head>
        <title>Faça seu login</title>
      </Head>

      <div className={styles.containerCenter}>
        <h3>Login</h3>
        <div className={styles.login}>
          <form>
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <Button type="submit" loading={true}>
            Dalhe
          </Button>
          </form>
          <a className={styles.text}>Se não tem um acesso peça o seu!</a>
        </div>
      </div>
    </>
  );
}
