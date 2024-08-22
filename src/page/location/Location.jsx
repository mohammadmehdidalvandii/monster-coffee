import Breadcrumb from "../../components/modules/Breadcrumb/Breadcrumb"
import Locations from "../../components/template/location/Locations/Locations"
import headTitle from "../../utils/HeadTitle"


function Location() {
  headTitle("نزدیکترین")
  return (
    <>
    <Breadcrumb title="نزدیکترین"/>
    <Locations/>
    </>
  )
}

export default Location