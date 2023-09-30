import { useAppSelector } from '../../../../store/store';
import { Record, TeamStats } from '../../../../types/SeasonsTypes';
import TBody from '../TBody/TBody';
import THead from '../THead/THead';
import classes from './Standings.module.css'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';
import Playoff from '../Playoff/Playoff';

const Standings = () => {
  const record: Record[] = useAppSelector(state => state.seasons.season)
  const [value, setValue] = useState('1');

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="League" value="1" />
            <Tab label="Stenley Cup" value="2"  sx={{ marginLeft: 'auto' }} />
          </TabList>
        </Box>
        <TabPanel value="1">
          <div className={classes.standings}>
            <h3>League</h3>
            <table className={classes.table}>
              <THead />
              <tbody>
                {record[0].teamRecords.map((teamRecord: TeamStats) => <TBody teamRecord={teamRecord} key={teamRecord.leagueRank} rank={teamRecord.leagueRank} />)}
              </tbody>
            </table>
          </div>
        </TabPanel>
        <TabPanel value="2"><Playoff /></TabPanel>
      </TabContext>
    </Box>


  )
}

export default Standings