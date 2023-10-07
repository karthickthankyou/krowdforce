import { ToastButton } from '../components/ToastButton'
import { Map } from '@krowdforce/ui/src/components/organisms/Map'
import { Panel } from '@krowdforce/ui/src/components/organisms/Map/Panel'
import { SetCity } from '@krowdforce/ui/src/components/organisms/SetCity'

export default async function Home() {
  return (
    <main>
      <Map>
        <Panel position='left-top'>
          <SetCity />
        </Panel>
      </Map>
      <ToastButton />
    </main>
  )
}
