import React from 'react';
import { HexGrid, Layout, Hexagon } from 'react-hexgrid';
import './HexagonGrid.scss';

const GlowingObject = () => {
    return <div className="glowing-object"></div>;
  };

const HexagonGrid = () => (
  <div className="hexagon-background">
    <HexGrid width="100vw" height="100vh" viewBox="-30 -30 100 100">
      <Layout size={{ x: 12, y: 12 }} spacing={1.03} flat={true}>
        {Array.from({ length: 500 }, (_, i) => (
          <Hexagon key={i} q={i % 15-6} r={Math.floor(i / 15-4)} s={-((i % 15) + Math.floor(i / 15))} />
        ))}
      </Layout>
    </HexGrid>
    <GlowingObject />
  </div>
);

export default HexagonGrid;