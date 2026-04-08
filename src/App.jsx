import Profile from './components/Profile'
import Gallery from './components/Gallery'
import { NamedComponent1, NamedComponent2, NamedComponent3 } from './components/NamedComponents'
import { NamedExportTest } from './components/NamedComponentTest'

export default function App() {

  return (
    <>
      <Gallery />
      <Profile />
      <NamedExportTest />
    </>
  )
}