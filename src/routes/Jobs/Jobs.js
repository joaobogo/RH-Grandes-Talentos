import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import { client } from "../../client";
import CardJob from "../../components/Jobcard/CardJob";
import JobsContainer from "./JobsStyles";
import Footer from "../../components/Footer/Footer";
import Pagination from "../../components/Pagination/Pagination";

function Jobs() {
  const [oportunidades, setOportunidades] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getServerSideProps().then((res) => {
      setOportunidades(res.oportunidades);
    });
  }, []);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = oportunidades.slice(firstPostIndex, lastPostIndex);

  return (
    <div>
      <Header />
      <JobsContainer>
        <h1>Nossas Oportunidades</h1>
        <input
          placeholder="O que você busca?"
          onChange={(e) => setSearch(e.target.value)}
        />
        {search.length === 0 ? (
          <div>
            {currentPosts.map((oportunidade) => (
              <CardJob key={oportunidade._id} oportunidade={oportunidade} />
            ))}
            <Pagination
              totalPosts={oportunidades.length}
              postsPerPage={postsPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </div>
        ) : (
          <div>
            {oportunidades
              .filter((oportunidade) => {
                return oportunidade.posicao
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })
              .map((oportunidade) => (
                <CardJob key={oportunidade._id} oportunidade={oportunidade} />
              ))}
            <Pagination
              totalPosts={oportunidades.length}
              postsPerPage={postsPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </div>
        )}
      </JobsContainer>
      <Footer />
    </div>
  );
}

const getServerSideProps = async () => {
  const oportunidades = await client.fetch('*[_type=="oportunidades"]');
  return {
    oportunidades,
  };
};
export default Jobs;
