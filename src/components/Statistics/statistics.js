import css from "./statistics.module.css"
import PropTypes from 'prop-types'

const Statistics = ({title, data}) => {
return <section className={css.statistics}>
  <h2 className={css.title}>{title}</h2>

      <ul className={css.stat_list}>
    {data.map(item => 
     (<li className={css.item} key={item.id}>
            <span className={css.label}>{item.label}</span>
      <span className={css.percentage}>{item.percentage}%</span>
    </li>)
    )}
  </ul>
</section>
}
Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
}
export default Statistics