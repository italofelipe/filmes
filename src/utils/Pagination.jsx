import React, { Component } from 'react';
import _ from 'lodash';

const Pagination = (props) => {
	const { itemsCount, pageSize, onPageChange, currentPage } = props;
	const pagesCount = Math.ceil(itemsCount / pageSize); // Math feito para evitar cair em numero float
	console.log(currentPage);

	const pages = _.range(1, pagesCount + 1);
	return (
		<nav>
			<ul className="pagination">
				{pages.map((page) => (
					<li key={page} className={page === currentPage ? 'page-item active' : 'page-item'}>
						<a className="page-link" onClick={() => onPageChange(page)}>
							{page}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Pagination;
