import { useAppSelector } from '../../../../store/store';
import { TeamStats, Record } from '../../../../types/SeasonsTypes';
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

const StandingsWithDivisions = () => {
  const record: Record[] = useAppSelector(state => state.seasons.season)
  const divisions = useAppSelector(state => state.seasons.division)
  const [value, setValue] = useState('1');

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Divisions" value="1" />
            <Tab label="League" value="2" />
            <Tab label="Stanley Cup" value="3" sx={{ marginLeft: 'auto' }} />
          </TabList>
        </Box>
        <TabPanel value="1">{divisions.map((division: string) =>
          <div key={division}>
            {record
              .filter((r: { division: { name: string; } }) => r.division.name === division)
              .map((r: { division: { name: string; } }) => <div key={`1${division}`}>
                <h3>
                  {r.division.name} division
                </h3>
                <table className={classes.table}>
                  <THead />
                  <tbody>
                    {
                      record
                        .filter((r: Record) => r.division.name === division)
                        .map((team: Record) => team.teamRecords
                          .map((teamRecord: TeamStats) => <TBody teamRecord={teamRecord} key={teamRecord.leagueRank} rank={teamRecord.divisionRank} />))
                    }
                  </tbody>
                </table>
              </div>)
            }
          </div>
        )
        }</TabPanel>
        <TabPanel value="2"><div className={classes.standings}>
          <h3>League</h3>
          <table className={classes.table}>
            <THead />
            <tbody>
              {[...record[0].teamRecords, ...record[1].teamRecords]
                .sort((a, b) => Number(a.leagueRank) - Number(b.leagueRank))
                .map((teamRecord: TeamStats) => <TBody teamRecord={teamRecord} key={teamRecord.leagueRank} rank={teamRecord.leagueRank} />)}
            </tbody>
          </table>
        </div></TabPanel>
        <TabPanel value="3">
            <Playoff />
          </TabPanel>
      </TabContext>
    </Box>
  )
}

export default StandingsWithDivisions