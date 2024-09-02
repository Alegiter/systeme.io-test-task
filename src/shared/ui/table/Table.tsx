import { FC, PropsWithChildren, ReactNode } from "react";

type Props<T, ExtraColumnKeys> = {
	data: Array<T>;
	ThCell: FC<{ objKey: keyof T | ExtraColumnKeys }>;
	TdCell: FC<{ objKey: keyof T | ExtraColumnKeys; obj: T }>;
	keyGetter: (obj: T) => string;
	omitKeys?: Array<keyof T | ExtraColumnKeys>;
	extraRightColumns?: Array<ExtraColumnKeys>
};

export function Table<T extends object, ExtraColumnKeys extends string>(props: Props<T, ExtraColumnKeys>) {
	const {
		data,
		keyGetter,
		ThCell,
		TdCell,
		omitKeys = [],
		extraRightColumns = []
	} = props;

	if (!data.length) {
		return null
	}

	const keys = (Object.keys(data[0]).concat(extraRightColumns) as Array<keyof T | ExtraColumnKeys>)
		.filter((key) => !omitKeys.includes(key));
	const headers: Array<ReactNode> = [];
	const rows: Array<ReactNode> = [];

	for (const obj of data) {
		const cells: Array<ReactNode> = [];
		rows.push(
			<tr key={keyGetter(obj)}>{cells}</tr>
		);

		for (const key of keys) {
			cells.push(
				<Td key={key.toString()}>
					<TdCell
						objKey={key}
						obj={obj}
					/>
				</Td>
			);

			if (headers.length < keys.length) {
				headers.push(
					<Th key={key.toString()}>
						<ThCell objKey={key} />
					</Th>
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

const Th: FC<PropsWithChildren> = ({ children }) => {
	return (
		<th className="p-3 dark:bg-slate-700">
			{children}
		</th>
	);
}

const Td: FC<PropsWithChildren> = ({ children }) => {
	return (
		<td className="p-3 dark:bg-slate-500 dark:border-b-slate-700 border-b">
			{children}
		</td>
	);
}