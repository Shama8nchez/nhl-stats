import { useEffect } from "react";
import { useAppDispatch } from "../../store/store";
import { getTeams } from "../../store/teamsSlice";

function Teams() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getTeams())
  }, [])

  return (
    <div>
        Teams
    </div>
  )
}

export default Teams;