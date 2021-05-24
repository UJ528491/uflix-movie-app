import React from "react";
import styled from "styled-components";
import noImage from "../../assets/noImage.jpg";

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  width: 100%;
`;
const InfoTitle = styled.div`
  display: flex;
  flex-direction: column;
`;
const CompanyContainer = styled.div`
  height: 34rem;
  width: 100%;
  text-align: center;
  margin-top: 2rem;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  flex-wrap: nowrap;
`;
const CompanyItems = styled.div`
  display: flex;
  flex-direction: column;
`;
const CompanyLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30rem;
  padding: 0 2rem;
  background: white;
  opacity: 0.6;
  overflow: hidden;
`;
const CompanyLogo = styled.img`
  padding-right: 1rem;
  width: 30rem;
`;

const CompanyName = styled.span`
  font-size: 2rem;
`;
const InfoTitleName = styled.span`
  font-size: 2rem;
`;

const index = ({ result, loading }) => {
  return (
    <InfoContainer>
      <InfoTitle>
        <InfoTitleName>
          Production Countries :{" "}
          {result.production_countries[0]
            ? result.production_countries[0].name
            : result.origin_country[0]}
        </InfoTitleName>
        <InfoTitleName>Production Companies : </InfoTitleName>
      </InfoTitle>
      <CompanyContainer>
        {result.production_companies.map(company => (
          <CompanyItems key={company.id}>
            <CompanyLogoContainer>
              <CompanyLogo
                src={
                  company.logo_path
                    ? `https://image.tmdb.org/t/p/w500/${company.logo_path}`
                    : noImage
                }
                alt="company-logo"
              />
            </CompanyLogoContainer>
            <CompanyName>{company.name}</CompanyName>
          </CompanyItems>
        ))}
      </CompanyContainer>
    </InfoContainer>
  );
};

export default index;
