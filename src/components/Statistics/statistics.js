import css from "./statistics.module.css"
import PropTypes from 'prop-types'

const Statistics = ({title, data}) => {
return <section className={css.statistics}>
  <h2 className={css.title}>{title}</h2>

  <ul className={css.stat_list}>
    <li className={css.item}>
            <span className={css.label}>{data[0].label}</span>
      <span className={css.percentage}>{data[0].percentage}%</span>
    </li>
    <li className={css.item}>
      <span className={css.label}>{data[1].label}</span>
      <span className={css.percentage}>{data[1].percentage}%</span>
    </li>
    <li className={css.item}>
      <span className={css.label}>{data[2].label}</span>
      <span className={css.percentage}>{data[2].percentage}%</span>
    </li>
    <li className={css.item}>
      <span className={css.label}>{data[3].label}</span>
      <span className={css.percentage}>{data[3].percentage}%</span>
        </li>
        <li className={css.item}>
      <span className={css.label}>{data[4].label}</span>
      <span className={css.percentage}>{data[4].percentage}%</span>
    </li>
  </ul>
</section>
}
Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
}
export default Statistics