import styles from "@/styles/page.module.css";
import Header from "@/components/header";
import PageHeading from "@/components/pageHeading";
import { pageHeadingData } from "@/data/pageHeadingData";

const Machines = () => {
  return(
    <div className={styles.layout}>
      <header>
        <Header />
      </header>
      <main className={styles.main}>
        <PageHeading title={pageHeadingData['machines'][0]} description={pageHeadingData['machines'][1]} />
        <div>
          <h3>GALLERIA XA7C-R36T</h3>
          <table>
            <tbody>
              <tr>
                <td className={styles.tableTextCenter}>OS</td>
                <td>Windows11 HOME 64ビット</td>
              </tr>
              <tr>
                <td className={styles.tableTextCenter}>CPU</td>
                <td>Intel Core i7-12700 (2.10GHz-4.80GHz / 12コア / 20スレッド)</td>
              </tr>
              <tr>
                <td className={styles.tableTextCenter}>Graphics</td>
                <td>NVIDIA GeForce RTX 3060 Ti 8GB (HDMI x1, DisplayPort x3)</td>
              </tr>
              <tr>
                <td className={styles.tableTextCenter}>Memory</td>
                <td>16GB DDR4 SDRAM (PC4-25600 / 8GBx2 / 2チャネル)</td>
              </tr>
              <tr>
                <td className={styles.tableTextCenter}>SSD</td>
                <td>1TB NVMe SSD</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h3>MacBook Air (M1, 2020)</h3>
          <table>
            <tbody>
              <tr>
                <td className={styles.tableTextCenter}>OS</td>
                <td>macOS Sequoia 15.3.1</td>
              </tr>
              <tr>
                <td className={styles.tableTextCenter}>Processor</td>
                <td>Apple M1 (8コア GPU, 16コア Neural Engine)</td>
              </tr>
              <tr>
                <td className={styles.tableTextCenter}>Display</td>
                <td>Retina display 13.3インチ (2560x1600)</td>
              </tr>
              <tr>
                <td className={styles.tableTextCenter}>Memory</td>
                <td>16GB</td>
              </tr>
              <tr>
                <td className={styles.tableTextCenter}>Storage</td>
                <td>512GB</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h3>iPad Pro 11インチ (第3世代)</h3>
          <table>
            <tbody>
              <tr>
                <td className={styles.tableTextCenter}>OS</td>
                <td>iPadOS 18.3.1</td>
              </tr>
              <tr>
                <td className={styles.tableTextCenter}>Processor</td>
                <td>Apple M1 (8コア GPU, 16コア Neural Engine)</td>
              </tr>
              <tr>
                <td className={styles.tableTextCenter}>Display</td>
                <td>Liquid Retina display</td>
              </tr>
              <tr>
                <td className={styles.tableTextCenter}>Memory</td>
                <td>8GB</td>
              </tr>
              <tr>
                <td className={styles.tableTextCenter}>Storage</td>
                <td>128GB</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h3>iPhone 13 Pro</h3>
          <table>
            <tbody>
              <tr>
                <td className={styles.tableTextCenter}>OS</td>
                <td>iOS 18.3.1</td>
              </tr>
              <tr>
                <td className={styles.tableTextCenter}>Processor</td>
                <td>A15 Bionic (5コア GPU, 16コア Neural Engine)</td>
              </tr>
              <tr>
                <td className={styles.tableTextCenter}>Display</td>
                <td>Super Retina XDR display with ProMotion</td>
              </tr>
              <tr>
                <td className={styles.tableTextCenter}>Memory</td>
                <td>6GB</td>
              </tr>
              <tr>
                <td className={styles.tableTextCenter}>Storage</td>
                <td>128GB</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h3>Apple Watch Series 10 (GPS)</h3>
          <table>
            <tbody>
              <tr>
                <td className={styles.tableTextCenter}>OS</td>
                <td>watchOS 11.3.1</td>
              </tr>
              <tr>
                <td className={styles.tableTextCenter}>Processor</td>
                <td>S10 SiP(64-bit dual core processor, 4-core Neural Engine)</td>
              </tr>
              <tr>
                <td className={styles.tableTextCenter}>Display</td>
                <td>LTPO3 OLED Always-On Retina display</td>
              </tr>
              <tr>
                <td className={styles.tableTextCenter}>Material</td>
                <td>Aluminum case(42mm)</td>
              </tr>
              <tr>
                <td className={styles.tableTextCenter}>Storage</td>
                <td>64GB</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default Machines;
