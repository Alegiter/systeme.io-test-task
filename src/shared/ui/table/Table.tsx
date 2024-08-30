import { FC, PropsWithChildren, ReactNode } from "react";

type Props<T> = PropsWithChildren<{
	data: Array<T>;
	ThCell: FC<{ objKey: keyof T }>;
	TdCell: FC<{ objKey: keyof T; obj: T }>;
	keyGetter: (obj: T) => string;
	omitKeys?: Array<keyof T>;
}>;

export function Table<T extends object>(props: Props<T>) {
	const { data, keyGetter, ThCell, TdCell, omitKeys = [] } = props;

	const headers: Array<ReactNode> = [];
	const rows: Array<ReactNode> = [];
	for (const obj of data) {
		const keys = Object.keys(obj) as Array<keyof T>;
		const cells: Array<ReactNode> = [];
		rows.push(
			<tr key={keyGetter(obj)}>{cells}</tr>
		);
		for (const key of keys) {
			if (omitKeys.includes(key)) {
				continue;
			}

			cells.push(
				<td
					key={key.toString()}
					className="p-3 dark:bg-slate-500 dark:border-b-slate-700 border-b"
				>
					<TdCell
						objKey={key}
						obj={obj}
					/>
				</td>
			);

			if (headers.length < keys.length - omitKeys.length) {
				headers.push(
					<th
						key={key.toString()}
						className="p-3 dark:bg-slate-700"
					>
						<ThCell objKey={key} />
					</th>
				);
			}
		}
	}

	return (
		<table className="w-full border-collapse text-left">
			<thead>
				<tr>{headers}</tr>
			</thead>
			<tbody>{rows}</tbody>
		</table>
	);
}
