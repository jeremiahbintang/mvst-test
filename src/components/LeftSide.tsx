import { People, PeopleOutline } from "@mui/icons-material";
import { Avatar, Box, Chip, Divider, Grid, Typography } from "@mui/material";

export interface PersonalInformation {
  name: string;
  loginName: string;
  bio: string;
  followers: number;
  following: number;
  email: string;
}
export interface Organization {
  id: number;
  name: string;
  avatarUrl: string;
}

interface LeftSideProps {
  avatarUrl: string;
  personalInformation: PersonalInformation;
  organizations: Organization[];
  className?: string;
}

export default function LeftSide({
  avatarUrl,
  personalInformation,
  organizations,
  className,
}: LeftSideProps) {
  return (
    <Box textAlign="center" className={className}>
      <Avatar src={avatarUrl} sx={{ width: 296, height: 296 }} />
      <Typography variant="h5">{personalInformation.name}</Typography>
      <Typography variant="subtitle1">
        {personalInformation.loginName}
      </Typography>
      <Typography variant="body2">{personalInformation.bio}</Typography>
      <Chip
        icon={<People />}
        label={`${personalInformation.followers} followers`}
      />
      <Chip
        icon={<PeopleOutline />}
        label={`${personalInformation.following} following`}
      />
      <Divider
        sx={{
          marginY: 2,
        }}
      />
      <Typography variant="h6">Organizations</Typography>
      {organizations.length > 0 ? (
        organizations.map((org) => (
          <Avatar src={org.avatarUrl} alt={org.name} />
        ))
      ) : (
        <Typography variant="subtitle2" color="gray">
          User is not a member of any organization
        </Typography>
      )}
    </Box>
  );
}
