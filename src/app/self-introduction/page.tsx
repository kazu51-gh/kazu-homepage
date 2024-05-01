import styles from "@/styles/page.module.css";
import Header from "@/components/header";
import PageHeading from "@/components/pageHeading";
import { pageHeadingData } from "@/data/pageHeadingData";

const SelfIntroduction = () => {
  return(
    <div className={styles.layout}>
      <header>
        <Header />
      </header>
      <main className={styles.main}>
        <PageHeading title={pageHeadingData['self-introduction'][0]} description={pageHeadingData['self-introduction'][1]} />
        <div>
          <h3>基本情報</h3>
          <table>
            <tbody>
              <tr>
                <td className={styles.tableTextCenter}>名前</td>
                <td>kazu</td>
              </tr>
              <tr>
                <td className={`${styles.tableTextCenter} ${styles.keepBreak}`}>生年<wbr />月日</td>
                <td>2001/06/17</td>
              </tr>
              <tr>
                <td className={styles.tableTextCenter}>出身</td>
                <td>大阪府</td>
              </tr>
              <tr>
                <td className={styles.tableTextCenter}>職業</td>
                <td>システムエンジニア</td>
              </tr>
              <tr>
                <td className={styles.tableTextCenter}>趣味</td>
                <td className={styles.keepBreak}>動画鑑賞・<wbr />小規模アプリケーション開発</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h3>経歴</h3>
          <table>
            <tbody>
              <tr>
                <td className={styles.tableTextLeft}>2001/06/17</td>
                <td>誕生</td>
              </tr>
              <tr>
                <td className={styles.tableTextLeft}>2014/04/01 - 2017/03/31</td>
                <td className={styles.keepBreak}>私立 清教学園<wbr />中学校</td>
              </tr>
              <tr>
                <td className={styles.tableTextLeft}>2017/04/01 - 2020/03/31</td>
                <td className={styles.keepBreak}>私立 清教学園<wbr />高等学校</td>
              </tr>
              <tr>
                <td className={styles.tableTextLeft}>2020/04/01 - 2024/03/31</td>
                <td className={styles.keepBreak}>私立 京都産業大学 <wbr />情報理工学部</td>
              </tr>
              <tr>
                <td className={styles.tableTextLeft}>2024/04/01 -</td>
                <td>SIer企業在籍中</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h3>開発経験</h3>
          <table>
            <tbody>
              <tr>
                <td className={styles.tableTextLeft}>ウェーブレット変換画像処理アプリケーション(大学授業内チーム開発)</td>
                <td>ウェーブレット変換を用いた画像の圧縮アプリケーションを開発</td>
              </tr>
              <tr>
                <td className={styles.tableTextLeft}>図書管理システム(個人開発 → 部活動内チーム開発)</td>
                <td>大学時の部活動が所有する書籍の管理システムを開発</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default SelfIntroduction;
