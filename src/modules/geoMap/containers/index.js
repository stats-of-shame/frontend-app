import {GeoMap} from '../components/index'
import { connect } from "react-redux"

const mapStateToProps = state => state;
const dispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, dispatchToProps)(GeoMap);
