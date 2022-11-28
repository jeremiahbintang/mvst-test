import moment from "moment";
import { useEffect, useState } from "react";
import ForkRightIcon from "@mui/icons-material/ForkRight";
import {
  Box,
  Button,
  Chip,
  Grid,
  Icon,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
export interface Repository {
  id: number;
  name: string;
  description: string;
  language: string;
  forksCount: number;
  license: string;
  updatedAt: Date;
}
interface RightSideProps {
  className?: string;
  repositories: Repository[];
}
export default function RightSide({ className, repositories }: RightSideProps) {
  const [value, setValue] = useState(1);
  const [filteredRepositories, setFilteredRepositories] =
    useState(repositories);
  useEffect(() => {
    setFilteredRepositories(repositories);
  }, [repositories]);
  const menuItems = [
    {
      name: "Overview",
      path: "/",
      count: null,
    },
    {
      name: "Repositories",
      path: "/",
      count: repositories.length,
    },
    {
      name: "Projects",
      path: "/",
      count: null,
    },
  ];
  return (
    <div className={className}>
      <Tabs value={value}>
        {menuItems.map((item) => (
          <Tab
            label={
              <div>
                {item.name} {item.count ? <Chip label={item.count} /> : ""}
              </div>
            }
          />
        ))}
      </Tabs>
      <TextField
        id="outlined-basic"
        fullWidth
        label="Find a repository..."
        onChange={(e) => {
          setFilteredRepositories(
            repositories.filter((repo) => repo.name.includes(e.target.value))
          );
        }}
        variant="outlined"
      />
      <div>
        {filteredRepositories.map((repo) => (
          <Box
            key={repo.id}
            sx={{ flexGrow: 1 }}
            marginTop="16px"
            width="100%"
            padding="8px"
            border="1px solid gray"
            borderRadius="8px"
            minHeight="120px"
          >
            <Grid container>
              <Grid item>
                <Grid item>
                  <Typography variant="h5">{repo.name}</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle2" color="gray">
                    {repo.description}
                  </Typography>
                </Grid>
                <Grid container marginTop="40px">
                  {repo.language && (
                    <Grid item>
                      <Chip label={repo.language} />
                    </Grid>
                  )}
                  {repo.forksCount > 0 && (
                    <Grid item>
                      <Chip label={`Forked ${repo.forksCount} times`} />
                    </Grid>
                  )}
                  {repo.license && (
                    <Grid item>
                      <Chip label={repo.license} />
                    </Grid>
                  )}
                  <Grid item>
                    <Chip
                      label={`Updated ${moment(repo.updatedAt).fromNow()}`}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        ))}
      </div>
    </div>
  );
}
