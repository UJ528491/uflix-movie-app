import React from "react";
import styled from "styled-components";

const MediaContainer = styled.div`
  margin-top: 2rem;
`;
const VedioContainer = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  display: flex;
  flex-wrap: nowrap;
  margin-top: 2rem;
`;
const VedioThumbnail = styled.a`
  padding-right: 1rem;
`;
const Trailer = styled.span`
  font-size: 2rem;
`;
const index = ({ result, loading }) => {
  return (
    <MediaContainer>
      <Trailer>Official Trailer : </Trailer>
      <VedioContainer>
        {result.videos.results.map(video => (
          <VedioThumbnail
            key={video.id}
            href={`https://www.youtube.com/watch?v=${video.key}`}
          >
            <img src={`https://img.youtube.com/vi/${video.key}/0.jpg`} alt="" />
          </VedioThumbnail>
        ))}
      </VedioContainer>
    </MediaContainer>
  );
};

export default index;
