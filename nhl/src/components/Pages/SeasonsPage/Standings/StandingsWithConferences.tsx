import { useAppSelector } from '../../../../store/store';
import { Record, TeamStats } from '../../../../types/SeasonsTypes';
import classes from './Standings.module.css'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useEffect, useState } from 'react';
import THead from '../THead/THead';
import TBody from '../TBody/TBody';

const StandingsWithConferences = () => {
  const record = useAppSelector(state => state.seasons.season)
  const conferences = useAppSelector(state => state.seasons.conference)
  const divisions = useAppSelector(state => state.seasons.division)
  const [value, setValue] = useState('1');
  const [commonTeamRecords, setCommonTeamRecords] = useState<TeamStats[]>([])
  const [firstTeamRecords, setFirstTeamRecords] = useState<TeamStats[]>([])
  const [secondTeamRecords, setSecondTeamRecords] = useState<TeamStats[]>([])
  useEffect(() => {
    let arr: TeamStats[] = []
    for (let i = 0; i < record.length; i++) {
      arr = [...arr, ...record[i].teamRecords]
    }
    setCommonTeamRecords(arr)
  }, [])

  useEffect(() => {
    let arr1: TeamStats[] = []
    let arr2: TeamStats[] = []
    for (let i = 0; i < record.length; i++) {
      if (record[i].conference.name === conferences[0]) {
        arr1 = [...arr1, ...record[i].teamRecords]
      }
      if (record[i].conference.name === conferences[1]) {
        arr2 = [...arr2, ...record[i].teamRecords]
      }
    }
    setFirstTeamRecords(arr1)
    setSecondTeamRecords(arr2)
  }, [record])

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Divisions" value="1" />
              <Tab label="Conferences" value="2" />
              <Tab label="League" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <div>{conferences.map(conference =>
              <div key={conference}>
                  {divisions.map(division =>
                    <div key={division}>
                      {record.filter((r: { conference: { name: string; } }) => r.conference.name === conference)
                        .filter((r: { division: { name: string; } }) => r.division.name === division)
                        .map((r: { division: { name: string; } }) => <div key={`div${r.division.name}`}><h3>
                          {r.division.name} division
                        </h3>
                          <table className={classes.table}>
                            <THead />
                            <tbody>
                              {
                                record
                                  .filter((r: Record) => r.division.name === division)
                                  .map((team: Record) => team.teamRecords
                                    .map((teamRecord: TeamStats) => <TBody teamRecord={teamRecord} key={teamRecord.leagueRank} rank={teamRecord.divisionRank}/>))
                              }
                            </tbody>
                          </table>
                        </div>)
                      }
                    </div>
                  )
                  }
              </div>
            )}
            </div>
          </TabPanel>
          <TabPanel value="2">
            <div>{conferences.map(conference =>
              <div key={`2${conference}`}>
                <h3>
                  {conference} conference
                </h3>
                <table className={classes.table}>
                  <THead />
                  <tbody>
                    {conference === conferences[0] ?
                      firstTeamRecords
                        .sort((a, b) => Number(a.leagueRank) - Number(b.leagueRank))
                        .map((teamRecord: TeamStats) => <TBody teamRecord={teamRecord} key={teamRecord.leagueRank} rank={teamRecord.conferenceRank}/>) :
                      secondTeamRecords
                        .sort((a, b) => Number(a.leagueRank) - Number(b.leagueRank))
                        .map((teamRecord: TeamStats) => <TBody teamRecord={teamRecord} key={teamRecord.leagueRank} rank={teamRecord.conferenceRank}/>)
                    }
                  </tbody>
                </table>
              </div>
            )}
            </div>
          </TabPanel>
          <TabPanel value="3">
            <h3>League</h3>
            <table className={classes.table}>
              <THead />
              <tbody>
                {commonTeamRecords
                  .sort((a, b) => Number(a.leagueRank) - Number(b.leagueRank))
                  .map((teamRecord: TeamStats) => <TBody teamRecord={teamRecord} key={teamRecord.leagueRank} rank={teamRecord.leagueRank}/>)}
              </tbody>
            </table>
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  )
}

export default StandingsWithConferences