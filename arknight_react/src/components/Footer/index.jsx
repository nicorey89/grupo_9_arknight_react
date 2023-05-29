import styles from "./index.module.css"

export const Footer = () => {
  return (
    <>
      {/* <!-- Footer --> */}
      <footer className={`sticky-footer ${styles.navegacion}`}>
        <div className="container my-auto">
          <div className="copyright text-center my-auto">
            <span className={`${styles.titulo}`}>Copyright &copy; AR-Knight 2022-2023</span>
          </div>
        </div>
      </footer>
      {/* <!-- End of Footer --> */}
    </>
  );
};
