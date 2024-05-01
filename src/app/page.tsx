import Header from "@/components/header";
import PageHeading from "@/components/pageHeading";
import { pageHeadingData } from "@/data/pageHeadingData";
import styles from "@/styles/page.module.css";

export default function Home() {
  return (
    <div className={styles.layout}>
      <header>
        <Header />
      </header>
      <main className={styles.main}>
        <PageHeading title={pageHeadingData['home'][0]} description={pageHeadingData['home'][1]} />
        <div>
          <h3>更新履歴</h3>
          <table>
            <tbody>
              <tr>
                <td className={styles.tableTextCenter}>2024/05/01</td>
                <td>ホームページ開設</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
