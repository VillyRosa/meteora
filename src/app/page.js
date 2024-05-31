import styles from "./page.module.css";
import { Categorias } from "./components/Categorias";
import { Produtos } from "./components/Produtos";

async function fetchApiData() {
  const urls = ['http://localhost:3000/api/produtos', 'http://localhost:3000/api/categorias'];

  let [produtosRes, categoriasRes] = await Promise.all(urls.map(url => fetch(url)));

  if (!produtosRes.ok || !categoriasRes.ok) {
    throw new Error('Não foi possível obter os dados');
  }

  const produtos = await produtosRes.json();
  const categorias = await categoriasRes.json();

  return { produtos, categorias };
}

export default async function Home() {
  const { produtos, categorias } = await fetchApiData();

  return (
    <>
      <main className={styles.main}>
        <Categorias categorias={categorias} />
        <Produtos produtos={produtos} />
      </main>
    </>
  );
}
