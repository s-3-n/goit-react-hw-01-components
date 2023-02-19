import PropTypes from 'prop-types';
import {
  ProfileBox,
  DescriptionBox,
  AvatarImg,
  NameOfUser,
  TagOfUser,
  LocationOfUser,
  StatsOfUser,
  LabelSpan,
  QuantitySpan,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileBox>
      <DescriptionBox>
        <AvatarImg src={avatar} alt={username} />
        <NameOfUser>{username}</NameOfUser>
        <TagOfUser>@{tag}</TagOfUser>
        <LocationOfUser>{location}</LocationOfUser>
      </DescriptionBox>

      <StatsOfUser>
        <li>
          <LabelSpan>Followers</LabelSpan>
          <QuantitySpan>{stats.followers}</QuantitySpan>
        </li>
        <li>
          <LabelSpan>Views</LabelSpan>
          <QuantitySpan>{stats.views}</QuantitySpan>
        </li>
        <li>
          <LabelSpan>Likes</LabelSpan>
          <QuantitySpan>{stats.likes}</QuantitySpan>
        </li>
      </StatsOfUser>
    </ProfileBox>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
