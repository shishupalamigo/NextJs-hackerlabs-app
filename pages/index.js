import { useState } from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/ui/Hero';
import Team from '../components/ui/Team';

export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:3000/api/data`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { devInfo: data.userInfo },
  };
};

function HomePage({ devInfo }) {
  const [allData, setAllData] = useState(devInfo);
  const [filteredData, setFilteredData] = useState(allData);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setFilteredData(
      devInfo.filter((dev) => dev.name.toLowerCase().includes(value) || dev.techstack.some((tech) => tech.toLowerCase().includes(value)))  
    );
  };
  // console.log(devInfo, "from homepage");
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
