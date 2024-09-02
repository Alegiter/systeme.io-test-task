import { FC, PropsWithChildren, ReactNode } from "react";

type Props<T> = PropsWithChildren<{
	data: Array<T>;
	ThCell: FC<{ objKey: keyof T }>;
	TdCell: FC<{ objKey: keyof T; obj: T }>;
	keyGetter: (obj: T) => string;
	omitKeys?: Array<keyof T>;
	ActionThCell?: FC;
	ActionTdCell?: FC<{ obj: T }>;
}>;

export function Table<T extends object>(props: Props<T>) {
	const {
		data,
		keyGetter,
		ThCell,
		TdCell,
		omitKeys = [],
		ActionThCell,
		ActionTdCell,
	} = props;

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
				<Td>
					<TdCell
						objKey={key}
						obj={obj}
					/>
				</Td>
			);

			if (headers.length < keys.length - omitKeys.length) {
				headers.push(
					<Th key={key.toString()}>
						<ThCell objKey={key} />
					</Th>
				);
			}
		}
		if (!ActionTdCell) {
			continue
		}
		cells.push(
			<Td key="action-cell">
				<ActionTdCell obj={obj} />
			</Td>
		)
	}

	if (ActionThCell || ActionTdCell) {
		headers.push(
			<Th key="action-header">
				{ActionThCell ? <ActionThCell /> : null}
			</Th>
		)
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
		<td className="p-3 dark:bg-slate-700">
			{children}
		</td>
	);
}

const Td: FC<PropsWithChildren> = ({ children }) => {
	return (
		<td className="p-3 dark:bg-slate-500 dark:border-b-slate-700 border-b">
			{children}
		</td>
	);
}