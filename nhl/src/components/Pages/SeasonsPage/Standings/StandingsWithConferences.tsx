import { useAppSelector } from '../../../../store/store';
import { Record, TeamStats } from '../../../../types/SeasonsTypes';
import classes from './Standings.module.css'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useEffect, useState } from 'react';

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
              <div>
                <div>
                  {conference}
                </div>
                <div>
                  {divisions.map(division =>
                    <div>
                      {record.filter((r: { conference: { name: string; } }) => r.conference.name === conference)
                        .filter((r: { division: { name: string; } }) => r.division.name === division)
                        .map((r: { division: { name: string; } }) => <div><h3>
                          {r.division.name} division
                        </h3>
                          <table className={classes.table}>
                            <thead>
                              <tr>
                                <th>#</th>
                                <th>Team</th>
                                <th>Games</th>
                                <th>Wins</th>
                                {Number(record[0].season) > 19992000 ? <th>OT</th> : <></>}
                                {Number(record[0].season) < 20052006 ? <th>Ties</th> : <></>}
                                <th>Losses</th>
                                <th>Points</th>
                                <th>Goals</th>
                              </tr>
                            </thead>
                            <tbody>
                              {
                                record
                                  .filter((r: Record) => r.division.name === division)
                                  .map((team: Record) => team.teamRecords.map((i: TeamStats) => <tr key={i.leagueRank}>
                                    <td>{i.divisionRank}</td>
                                    <td className={classes.leftAlign}>{i.team.name}</td>
                                    <td>{i.gamesPlayed}</td>
                                    <td>{i.leagueRecord.wins}</td>
                                    {Number(record[0].season) > 19992000 ? <td>{i.leagueRecord.ot}</td> : <></>}
                                    {Number(record[0].season) < 20052006 ? <td>{i.leagueRecord.ties}</td> : <></>}
                                    {/* <td>{i.leagueRecord.ties}</td> */}
                                    <td>{i.leagueRecord.losses}</td>
                                    <td>{i.points}</td>
                                    <td>{i.goalsScored} - {i.goalsAgainst}</td>
                                  </tr>))
                              }
                            </tbody>
                          </table>
                        </div>)
                      }
                      {
                      }
                    </div>
                  )
                  }
                </div>
              </div>
            )}
            </div>
          </TabPanel>
          <TabPanel value="2">
            <div>{conferences.map(conference =>
              <div>
                <div>
                  <div><h3>
                    {conference} conference
                  </h3>
                    <table className={classes.table}>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Team</th>
                          <th>Games</th>
                          <th>Wins</th>
                          {Number(record[0].season) > 19992000 ? <th>OT</th> : <></>}
                          {Number(record[0].season) < 20052006 ? <th>Ties</th> : <></>}
                          <th>Losses</th>
                          <th>Points</th>
                          <th>Goals</th>
                        </tr>
                      </thead>
                      <tbody>
                        { conference === conferences[0] ?
                          firstTeamRecords
                          .sort((a, b) => Number(a.leagueRank) - Number(b.leagueRank))
                            .map((i: TeamStats) => <tr key={i.leagueRank}>
                              <td>{i.conferenceRank}</td>
                              <td className={classes.leftAlign}>{i.team.name}</td>
                              <td>{i.gamesPlayed}</td>
                              <td>{i.leagueRecord.wins}</td>
                              {Number(record[0].season) > 19992000 ? <td>{i.leagueRecord.ot}</td> : <></>}
                              {Number(record[0].season) < 20052006 ? <td>{i.leagueRecord.ties}</td> : <></>}
                              {/* <td>{i.leagueRecord.ties}</td> */}
                              <td>{i.leagueRecord.losses}</td>
                              <td>{i.points}</td>
                              <td>{i.goalsScored} - {i.goalsAgainst}</td>
                            </tr>) :
                            secondTeamRecords
                            .sort((a, b) => Number(a.leagueRank) - Number(b.leagueRank))
                              .map((i: TeamStats) => <tr key={i.leagueRank}>
                                <td>{i.conferenceRank}</td>
                                <td className={classes.leftAlign}>{i.team.name}</td>
                                <td>{i.gamesPlayed}</td>
                                <td>{i.leagueRecord.wins}</td>
                                {Number(record[0].season) > 19992000 ? <td>{i.leagueRecord.ot}</td> : <></>}
                                {Number(record[0].season) < 20052006 ? <td>{i.leagueRecord.ties}</td> : <></>}
                                {/* <td>{i.leagueRecord.ties}</td> */}
                                <td>{i.leagueRecord.losses}</td>
                                <td>{i.points}</td>
                                <td>{i.goalsScored} - {i.goalsAgainst}</td>
                              </tr>)
                        }
                      </tbody>
                    </table>
                  </div>

                </div>

              </div>
            )}
            </div>
          </TabPanel>
          <TabPanel value="3">
            <table className={classes.table}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Team</th>
                  <th>Games</th>
                  <th>Wins</th>
                  {Number(record[0].season) > 19992000 ? <th>OT</th> : <></>}
                          {Number(record[0].season) < 20052006 ? <th>Ties</th> : <></>}
                  <th>Losses</th>
                  <th>Points</th>
                  <th>Goals</th>
                </tr>
              </thead>
              <tbody>
                {commonTeamRecords
                  .sort((a, b) => Number(a.leagueRank) - Number(b.leagueRank))
                  .map((i: TeamStats) => <tr key={i.leagueRank}>
                    <td>{i.leagueRank}</td>
                    <td className={classes.leftAlign}>{i.team.name}</td>
                    <td>{i.gamesPlayed}</td>
                    <td>{i.leagueRecord.wins}</td>
                    {Number(record[0].season) > 19992000 ? <td>{i.leagueRecord.ot}</td> : <></>}
                              {Number(record[0].season) < 20052006 ? <td>{i.leagueRecord.ties}</td> : <></>}
                    <td>{i.leagueRecord.losses}</td>
                    <td>{i.points}</td>
                    <td>{i.goalsScored} - {i.goalsAgainst}</td>
                  </tr>)}
              </tbody>
            </table>
          </TabPanel>
        </TabContext>
      </Box>


    </div>


  )
}

export default StandingsWithConferences