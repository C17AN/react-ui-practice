import React, { useEffect, useState } from "react";
import axios from "axios";
import Profile from "./Profile";
import styled from "styled-components";

const Profiles = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const { data } = await axios.get("https://json-placeholder-api.vercel.app/api/profiles");
        console.log(data);
        setProfiles(data.default.profiles);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  let loadingProfiles = [];

  for (let i = 0; i < 10; i++) {
    loadingProfiles.push(<Profile loading={true} key={i} />);
  }

  if (isLoading) {
    return (
      <ProfilesContainer>
        <HeaderTitle>Profiles</HeaderTitle>
        {loadingProfiles}
      </ProfilesContainer>
    );
  }

  return (
    <ProfilesContainer>
      <HeaderTitle>Profiles</HeaderTitle>
      {profiles.map((profile, idx) => (
        <Profile key={profile.id} profile={profile} />
      ))}
    </ProfilesContainer>
  );
};

const ProfilesContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 25px;
  max-width: 900px;
  margin: 40px auto;
`;

const HeaderTitle = styled.h1`
  color: #8a99c0;
`;

export default Profiles;
