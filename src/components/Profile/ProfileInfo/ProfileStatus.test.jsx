import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("profileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(< ProfileStatus status="teststatus" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("teststatus");
    });
});