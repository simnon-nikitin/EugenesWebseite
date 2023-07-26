import React from 'react';
import './Home.scss';

const Home: React.FC = () => {
  return (
    <>
      <div className="title-block">
        <h1 className="title-block__title">
          This site is a study project where I use Redax as a state manager.
        </h1>
      </div>
      <div className="tech-blocks">
        <div className="tech-block">
          <h3>Technologies used in this project:</h3>
          <ul>
            <li>Typescript</li>
            <li>React</li>
            <li>Redux</li>
            <li>React Router</li>
            <li>Axios</li>
            <li>SCSS</li>
            <li>React Skeleton</li>
          </ul>
        </div>
        <div className="tech-block">
          <p>Some else info</p>
        </div>
      </div>
    </>
  );
};

export default Home;
