/** @format */
/// <reference types="vitest" />

/**
 * @vitest-environment jsdom
 */

// ...existing test code...
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import AddForm from "./AddForm";

// ...existing test code...

describe("AddForm", () => {
	it("renders input and button", () => {
		render(<AddForm />);
		expect(
			screen.getByPlaceholderText(/e\.g\. oregano/i)
		).toBeInTheDocument();
		expect(
			screen.getByRole("button", { name: /add ingredient/i })
		).toBeInTheDocument();
	});

	it("shows hint when no ingredients", () => {
		render(<AddForm />);
		expect(
			screen.getByText(
				/Claude will suggest recipes based on these ingredients/i
			)
		).toBeInTheDocument();
	});

	it("adds ingredient to the list", () => {
		render(<AddForm />);
		const input = screen.getByPlaceholderText(/e\.g\. oregano/i);
		const button = screen.getByRole("button", {
			name: /add ingredient/i,
		});

		fireEvent.change(input, { target: { value: "oregano" } });
		fireEvent.click(button);

		expect(screen.getByText("Ingredients on hand:")).toBeInTheDocument();
		expect(screen.getByText("oregano")).toBeInTheDocument();
	});

	it("deletes ingredient from the list", () => {
		render(<AddForm />);
		const input = screen.getByPlaceholderText(/e\.g\. oregano/i);
		const button = screen.getByRole("button", {
			name: /add ingredient/i,
		});

		fireEvent.change(input, { target: { value: "oregano" } });
		fireEvent.click(button);

		const deleteBtn = screen.getByRole("button", {
			name: /delete ingredient/i,
		});
		fireEvent.click(deleteBtn);

		expect(screen.queryByText("oregano")).not.toBeInTheDocument();
	});
});
