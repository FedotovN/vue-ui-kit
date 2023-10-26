import OverlayToastModule from "../../../components/Toast/OverlayToast";
import { getRandomArrayItem } from "../../../utils/ObjectHelper";
import { ToastData } from "@/types/toast";
import { findByText, getByText, queryByText, waitFor } from "@testing-library/vue";
import { IColors, colors } from "../../../types/colors";
import { useToast } from "../../../composables";
import create from "../../utils/create";
import "@testing-library/jest-dom";
const { add } = useToast();
describe("Default behaviour", () => {
    it('Renders toast', async () => {
        const { body } = create(OverlayToastModule.OverlayToast);
        add({ content: "Content" });
        return waitFor(() => {
            expect(getByText(body, 'Content')).toBeInTheDocument();
        })
    });
    it('Renders multiple toasts', () => {
        const { body } = create(OverlayToastModule.OverlayToast);
        const contents = ['Lorem Ipsum', 'Test', '123', 'Ipsum lorem', '321'];
        const configs: ToastData[] = contents.map(content => ({ 
            content,
            color: getRandomArrayItem(Object.keys(colors) as (keyof IColors)[]),
            centerText: getRandomArrayItem([true, false]),
            delay: 9999
        }))
        const assertions = configs.map(config => {
            const { content, color, centerText } = config;
            add(config);
            return waitFor(() => {
                const text = getByText(body, content);
                const notification = text?.parentElement?.parentElement;
                expect(notification).toBeInTheDocument();
                expect(notification).toHaveStyle({ '--accent-color': colors[color].join(', ') });
                expect(text.parentElement).toHaveClass(centerText ? 'center-text' : '');
            })
        });
        return Promise.all(assertions);
    });
    it("Toast dissapears after delay", async () => {
        const { body } = create(OverlayToastModule.OverlayToast);
        const delays = [10, 50, 150];
        const assertions = delays.map(async delay => {
            add({ delay, content: 'content' });
            expect(await findByText(body, 'content')).toBeInTheDocument();            
            return waitFor(() => {
                expect(queryByText(body, 'content')).not.toBeInTheDocument();
            }, { timeout: delay + 1000 });
        });
        return Promise.all(assertions);
    });
})

