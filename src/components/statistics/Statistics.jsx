import css from './Statistics.module.css'
import PropTypes from 'prop-types';

const Statistics = ({title,  stats }) => {
    return <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}

        <ul className={css['stat__list']}>{stats.map(({ id, label, percentage }) => {
            return (<li className={css.item} key={id}>
                <span className={css.label}>{label}</span>
                <span className={css.percentage}>{percentage}%</span>
            </li>)
        }
    
        )
        }</ul>
</section>
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.array.isRequired,
}


export default Statistics;