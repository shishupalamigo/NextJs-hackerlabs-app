import { useState } from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/ui/Hero';
import Team from '../components/ui/Team';
import { data } from '../data/data';

export const getStaticProps = async () => {
  return {
    props: { devInfo: data },
  };
};

function HomePage({ devInfo }) {
  const [allData, setAllData] = useState(devInfo);
  const [filteredData, setFilteredData] = useState(allData);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setFilteredData(
      devInfo.filter((dev) => dev.name.toLowerCase().includes(value))
    );
    if (filteredData.length === 0) {
      setFilteredData(
        devInfo.filter((dev) =>
          dev.techstack.some((tech) => tech.toLowerCase().includes(value))
        )
      );
    }
  };

  return (
    <Layout>
      <Hero />
      <div className="flex justify-center w-3/4 mx-auto mt-10">
        <input
          placeholder="Search"
          className="p-2 border w-full"
          onChange={(e) => handleSearch(e)}
        />
      </div>
      <Team devInfo={filteredData} />
    </Layout>
  );
}

export default HomePage;
